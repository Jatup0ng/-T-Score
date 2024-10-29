function calculateTScore() {
    const mean = parseFloat(document.getElementById('mean').value);
    const stdDev = parseFloat(document.getElementById('stdDev').value);
    const score = parseFloat(document.getElementById('score').value);

    if (!isNaN(mean) && !isNaN(stdDev) && !isNaN(score)) {
        const tScore = 50 + 8.69031 * ((score - mean) / stdDev);
        document.getElementById('result').textContent = `T-Score: ${tScore.toFixed(2)}`;
    } else {
        document.getElementById('result').textContent = 'กรุณากรอกข้อมูลให้ครบถ้วน!!';
    }

}
