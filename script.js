// Initialize Flatpickr
const dateConfig = {
    dateFormat: "d/m/Y",
    locale: "pt",
    allowInput: true,
    onChange: calculateDays
};

const fpStart = flatpickr("#dateStart", dateConfig);
const fpEnd = flatpickr("#dateEnd", dateConfig);

// Add event listeners
document.getElementById('packageValue').addEventListener('input', function (e) {
    formatCurrencyInput(this);
    calculatePrices();
});
document.getElementById('downPaymentPercent').addEventListener('input', calculatePrices);
document.getElementById('installments').addEventListener('change', calculatePrices);
document.getElementById('holidayCheckbox').addEventListener('change', function () {
    const input = document.getElementById('holidayName');
    if (this.checked) {
        input.style.display = 'block';
        input.focus();
    } else {
        input.style.display = 'none';
        input.value = '';
    }
    generateText();
});
document.getElementById('holidayName').addEventListener('input', generateText);

// Add specific listeners for other currency fields to format
['pricePerPerson', 'downPayment', 'installmentValue'].forEach(id => {
    document.getElementById(id).addEventListener('input', function () {
        formatCurrencyInput(this);
    });
});

// Also trigger text generation on any other input
const inputs = document.querySelectorAll('input, select');
inputs.forEach(input => {
    input.addEventListener('input', generateText);
});

function parseCurrency(value) {
    if (!value) return 0;
    return parseFloat(value.replace(/\./g, '').replace(',', '.').replace('R$ ', '')) || 0;
}

function formatCurrency(value) {
    return value.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function formatCurrencyInput(input) {
    let value = input.value.replace(/\D/g, '');
    if (value === '') {
        input.value = '';
        return;
    }
    value = (value / 100).toFixed(2) + '';
    value = value.replace(".", ",");
    value = value.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
    input.value = value;
    generateText();
}

function calculatePrices(e) {
    const packageVal = parseCurrency(document.getElementById('packageValue').value);
    const percent = parseFloat(document.getElementById('downPaymentPercent').value) || 0;
    const installments = parseInt(document.getElementById('installments').value) || 12;

    let perPerson = 0;
    let downPayment = 0;
    let installmentVal = 0;

    // 1. Calculate Per Person
    if (packageVal > 0) {
        perPerson = packageVal / 2;
        document.getElementById('pricePerPerson').value = formatCurrency(perPerson);
    }

    // 2. Calculate Down Payment
    if (perPerson > 0 && percent > 0) {
        const rawDown = perPerson * (percent / 100);
        downPayment = Math.ceil(rawDown / 50) * 50;
        document.getElementById('downPayment').value = formatCurrency(downPayment);
    } else if (document.getElementById('downPayment').value) {
        downPayment = parseCurrency(document.getElementById('downPayment').value);
    }

    // 3. Calculate Installment
    if (packageVal > 0) {
        const remainder = packageVal - downPayment;
        if (remainder > 0) {
            installmentVal = remainder / installments;
            document.getElementById('installmentValue').value = formatCurrency(installmentVal);
        }
    }

    generateText();
}

function calculateDays() {
    const startStr = document.getElementById('dateStart').value;
    const endStr = document.getElementById('dateEnd').value;

    if (startStr && endStr) {
        const [d1, m1, y1] = startStr.split('/').map(Number);
        const [d2, m2, y2] = endStr.split('/').map(Number);

        if (d1 && m1 && y1 && d2 && m2 && y2) {
            const date1 = new Date(y1, m1 - 1, d1);
            const date2 = new Date(y2, m2 - 1, d2);

            const diffTime = date2 - date1;
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

            if (diffDays >= 0) {
                document.getElementById('days').value = diffDays + 1;
            }
        }
    }
    generateText();
}

function formatDateDisplay(dateStr) {
    if (!dateStr) return '...';
    const parts = dateStr.split('/');
    if (parts.length >= 2) {
        return `${parts[0]}/${parts[1]}`;
    }
    return dateStr;
}

function generateText() {
    const headline = document.getElementById('headline').value;
    const city = document.getElementById('city').value;
    const dateStart = document.getElementById('dateStart').value;
    const dateEnd = document.getElementById('dateEnd').value;
    const days = document.getElementById('days').value;
    const accommodation = document.getElementById('accommodation').value;
    const hotel = document.getElementById('hotel').value;
    const food = document.getElementById('food').value;

    const pricePerPerson = document.getElementById('pricePerPerson').value;
    const downPayment = document.getElementById('downPayment').value;
    const installmentValue = document.getElementById('installmentValue').value;
    const installments = document.getElementById('installments').value;

    let finalHeadline = headline;
    if (headline.trim() === "Descubra o paraíso em" && city) {
        finalHeadline = `${headline} ${city.toUpperCase()}`;
    } else if (!headline && city) {
        finalHeadline = `Pacote Incrível para ${city.toUpperCase()}`;
    }

    let foodDisplay = food;
    if (food === 'Half board') {
        foodDisplay = 'Half board (café da manhã + jantar)';
    } else if (food === 'Full board') {
        foodDisplay = 'Full board (café da manhã + almoço + jantar)';
    }

    const transferIncluded = document.getElementById('transferIncluded').checked;
    const transferText = transferIncluded ? '🚞 Translado incluso' : '🚫 Translado não incluso';

    const holidayChecked = document.getElementById('holidayCheckbox').checked;
    const holidayName = document.getElementById('holidayName').value;
    const holidayText = (holidayChecked && holidayName) ? ` / *${holidayName}*` : '';

    const text = `*${finalHeadline}*

📍 *Destino:* ${city || '...'}
🗓 Data: ${formatDateDisplay(dateStart)} a ${formatDateDisplay(dateEnd)} - ${days || '...'} dias${holidayText}
👫 Acomodação: ${accommodation}
✈️ Saída: Uberlândia 
🏨 Hotel: ${hotel || '...'}
☕ ${foodDisplay}
${transferText} 

💳 Somente R$${pricePerPerson || '...'} por pessoa
🔥Entrada ${downPayment || '...'} + ${installments}x de R$${installmentValue || '...'} sem juros no boleto ou cartão

⚠ Boleto sujeito a aprovação do banco
⚠ Vagas limitadas! Valores sujeitos a alteração sem aviso prévio.

📲 Fale agora com um agente e reserve sua viagem:
👉https://bit.ly/Atendimento-Nevada-Turismo`;

    document.getElementById('previewArea').innerText = text;
}

function copyText() {
    const text = document.getElementById('previewArea').innerText;
    navigator.clipboard.writeText(text).then(() => {
        const btn = document.querySelector('.copy-btn');
        const originalText = 'Copiar Texto'; // Hardcoded to ensure reset works correctly

        btn.innerText = 'Copiado!';
        // Use the primary teal color for success state, keeping text black for contrast
        btn.style.background = 'var(--primary)';
        btn.style.color = '#000000';
        btn.style.borderColor = 'var(--primary)';

        setTimeout(() => {
            btn.innerText = originalText;
            // Reset to transparent background with teal border/text
            btn.style.background = 'transparent';
            btn.style.color = 'var(--primary)';
            btn.style.borderColor = 'var(--primary)';
        }, 2000);
    });
}
