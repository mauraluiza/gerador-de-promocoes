# Project File: promo_generator.html

Path: `c:\Users\maura\OneDrive\Documentos\webapp\promo_generator.html`

```html
<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gerador de Promoções - Nevada Turismo</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css">
    <script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>
    <script src="https://npmcdn.com/flatpickr/dist/l10n/pt.js"></script>
    <style>
        :root {
            --primary: #0052D4;
            --secondary: #4364F7;
            --accent: #6FB1FC;
            --background: #F0F2F5;
            --surface: #FFFFFF;
            --text-main: #1A1A1A;
            --text-secondary: #666666;
            --success: #00C851;
            --gradient: linear-gradient(135deg, #0052D4 0%, #4364F7 50%, #6FB1FC 100%);
            --shadow: 0 10px 30px rgba(0, 82, 212, 0.15);
            --glass: rgba(255, 255, 255, 0.95);
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: 'Outfit', sans-serif;
        }

        body {
            background: var(--background);
            color: var(--text-main);
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px;
            background-image:
                radial-gradient(at 0% 0%, rgba(67, 100, 247, 0.1) 0px, transparent 50%),
                radial-gradient(at 100% 100%, rgba(0, 82, 212, 0.1) 0px, transparent 50%);
        }

        .app-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 40px;
            max-width: 1200px;
            width: 100%;
            background: var(--glass);
            backdrop-filter: blur(20px);
            border-radius: 30px;
            padding: 40px;
            box-shadow: var(--shadow);
            border: 1px solid rgba(255, 255, 255, 0.5);
        }

        .input-section {
            padding-right: 20px;
        }

        .preview-section {
            background: #F8F9FA;
            border-radius: 20px;
            padding: 30px;
            display: flex;
            flex-direction: column;
            border: 1px solid rgba(0, 0, 0, 0.05);
        }

        h1 {
            font-size: 28px;
            font-weight: 700;
            margin-bottom: 10px;
            background: var(--gradient);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        p.subtitle {
            color: var(--text-secondary);
            margin-bottom: 30px;
            font-size: 14px;
        }

        .form-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
        }

        .form-group {
            margin-bottom: 20px;
        }

        .form-group.full-width {
            grid-column: span 2;
        }

        label {
            display: block;
            font-size: 12px;
            font-weight: 600;
            color: var(--text-secondary);
            margin-bottom: 8px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        input,
        select,
        textarea {
            width: 100%;
            padding: 12px 16px;
            border: 2px solid #E1E5EB;
            border-radius: 12px;
            font-size: 14px;
            transition: all 0.3s ease;
            background: var(--surface);
            color: var(--text-main);
        }

        input:focus,
        select:focus,
        textarea:focus {
            border-color: var(--secondary);
            outline: none;
            box-shadow: 0 0 0 4px rgba(67, 100, 247, 0.1);
        }

        .btn {
            background: var(--gradient);
            color: white;
            border: none;
            padding: 16px 32px;
            border-radius: 12px;
            font-weight: 600;
            cursor: pointer;
            transition: transform 0.2s, box-shadow 0.2s;
            width: 100%;
            font-size: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
        }

        .btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(67, 100, 247, 0.3);
        }

        .preview-box {
            background: white;
            border-radius: 16px;
            padding: 20px;
            flex-grow: 1;
            white-space: pre-wrap;
            font-family: 'Roboto', sans-serif;
            /* WhatsApp style font */
            font-size: 14px;
            line-height: 1.6;
            color: #111;
            border: 1px solid #E1E5EB;
            margin-bottom: 20px;
            overflow-y: auto;
            max-height: 500px;
        }

        .preview-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 15px;
        }

        .preview-header h3 {
            font-size: 16px;
            font-weight: 600;
            color: var(--text-main);
        }

        .copy-btn {
            background: white;
            border: 2px solid var(--secondary);
            color: var(--secondary);
            padding: 8px 16px;
            border-radius: 8px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s;
        }

        .copy-btn:hover {
            background: var(--secondary);
            color: white;
        }

        @media (max-width: 768px) {
            .app-container {
                grid-template-columns: 1fr;
                padding: 20px;
            }
        }
    </style>
</head>

<body>
    <div class="app-container">
        <div class="input-section">
            <h1>Gerador de Ofertas</h1>
            <p class="subtitle">Preencha os dados abaixo para gerar o texto de divulgação.</p>

            <form id="promoForm">
                <div class="form-group full-width">
                    <label>Frase de Chamada</label>
                    <input type="text" id="headline" placeholder="Ex: Pacote Imperdível para GRAMADO"
                        value="Descubra o paraíso em">
                </div>

                <div class="form-grid">
                    <div class="form-group">
                        <label>Cidade (Destino)</label>
                        <input type="text" id="city" placeholder="Ex: Gramado">
                    </div>
                    <div class="form-group">
                        <label>Acomodação</label>
                        <select id="accommodation">
                            <option value="Duplo">Duplo</option>
                            <option value="Triplo">Triplo</option>
                            <option value="Quádruplo">Quádruplo</option>
                            <option value="Individual">Individual</option>
                        </select>
                    </div>
                </div>

                <div class="form-grid">
                    <div class="form-group">
                        <label>Data Início</label>
                        <input type="text" id="dateStart" placeholder="Selecione a data">
                    </div>
                    <div class="form-group">
                        <label>Data Fim</label>
                        <input type="text" id="dateEnd" placeholder="Selecione a data">
                    </div>
                </div>

                <div class="form-grid">
                    <div class="form-group">
                        <label>Qtd. Dias</label>
                        <input type="number" id="days" placeholder="Calculado automaticamente">
                    </div>
                    <div class="form-group">
                        <label>Regime Alimentação</label>
                        <select id="food">
                            <option value="Café da manhã">Café da manhã</option>
                            <option value="All inclusive">All inclusive</option>
                            <option value="Half board">Half board</option>
                            <option value="Full board">Full board</option>
                        </select>
                    </div>
                </div>

                <div class="form-group full-width">
                    <label>Nome do Hotel</label>
                    <input type="text" id="hotel" placeholder="Ex: Hotel Serra da Estrela">
                </div>

                <div class="form-grid">
                    <div class="form-group">
                        <label>Valor Total do Pacote</label>
                        <input type="text" id="packageValue" placeholder="R$ 3.000,00"
                            oninput="formatCurrencyInput(this)">
                    </div>
                    <div class="form-group">
                        <label>Valor Por Pessoa (Calculado)</label>
                        <input type="text" id="pricePerPerson" placeholder="R$ 1.500,00"
                            oninput="formatCurrencyInput(this)">
                    </div>
                </div>

                <div class="form-grid">
                    <div class="form-group">
                        <label>% Entrada</label>
                        <input type="number" id="downPaymentPercent" placeholder="Ex: 10">
                    </div>
                    <div class="form-group">
                        <label>Valor Entrada (Calculado)</label>
                        <input type="text" id="downPayment" placeholder="R$ 300,00" oninput="formatCurrencyInput(this)">
                    </div>
                </div>

                <div class="form-grid">
                    <div class="form-group">
                        <label>Parcelas</label>
                        <select id="installments">
                            <option value="1">1x</option>
                            <option value="2">2x</option>
                            <option value="3">3x</option>
                            <option value="4">4x</option>
                            <option value="5">5x</option>
                            <option value="6">6x</option>
                            <option value="7">7x</option>
                            <option value="8">8x</option>
                            <option value="9">9x</option>
                            <option value="10" selected>10x</option>
                            <option value="11">11x</option>
                            <option value="12">12x</option>
                            <option value="13">13x</option>
                            <option value="14">14x</option>
                            <option value="15">15x</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Valor da Parcela</label>
                        <input type="text" id="installmentValue" placeholder="R$ 100,00"
                            oninput="formatCurrencyInput(this)">
                    </div>
                </div>
            </form>
        </div>

        <div class="preview-section">
            <div class="preview-header">
                <h3>Prévia da Mensagem</h3>
                <button class="copy-btn" onclick="copyText()">Copiar Texto</button>
            </div>
            <div class="preview-box" id="previewArea">
                *Pacote Imperdível para...*

                📍 *Destino:* ...
                🗓 Data: ... a ... - ... dias
                👫 Acomodação: Duplo
                ✈️ Saída: Uberlândia
                🏨 Hotel: ...
                ☕ (Café da manhã)
                🚫 Translado não incluso

                💳 Somente R$... por pessoa
                🔥Entrada ... + 12x de R$... sem juros no boleto ou cartão

                ⚠ Boleto sujeito a aprovação do banco
                ⚠ Vagas limitadas! Valores sujeitos a alteração sem aviso prévio.

                📲 Fale agora com um agente e reserve sua viagem:
                👉https://bit.ly/Atendimento-Nevada-Turismo
            </div>
            <button class="btn" onclick="generateText()">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1-2-2V5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                    <line x1="9" y1="9" x2="9" y2="9"></line>
                    <line x1="15" y1="15" x2="15" y2="15"></line>
                    <line x1="12" y1="12" x2="12" y2="12"></line>
                </svg>
                Atualizar Prévia
            </button>
        </div>
    </div>

    <script>
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
        document.getElementById('packageValue').addEventListener('input', function(e) {
            formatCurrencyInput(this);
            calculatePrices();
        });
        document.getElementById('downPaymentPercent').addEventListener('input', calculatePrices);
        document.getElementById('installments').addEventListener('change', calculatePrices);
        
        // Add specific listeners for other currency fields to format
        ['pricePerPerson', 'downPayment', 'installmentValue'].forEach(id => {
            document.getElementById(id).addEventListener('input', function() {
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

            const text = `*${finalHeadline}*

📍 *Destino:* ${city || '...'}
🗓 Data: ${formatDateDisplay(dateStart)} a ${formatDateDisplay(dateEnd)} - ${days || '...'} dias
👫 Acomodação: ${accommodation}
✈️ Saída: Uberlândia 
🏨 Hotel: ${hotel || '...'}
☕ ${foodDisplay}
🚫 Translado não incluso 

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
                const originalText = btn.innerText;
                btn.innerText = 'Copiado!';
                btn.style.background = '#00C851';
                btn.style.color = 'white';
                btn.style.borderColor = '#00C851';
                setTimeout(() => {
                    btn.innerText = originalText;
                    btn.style.background = 'white';
                    btn.style.color = 'var(--secondary)';
                    btn.style.borderColor = 'var(--secondary)';
                }, 2000);
            });
        }
    </script>
</body>

</html>
```
