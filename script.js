window.onload = function() {
    const videos = {
        'Naughty ho raha ke!': 'https://www.youtube.com/embed/6KbXK8LZoPc?autoplay=1&loop=1&playlist=6KbXK8LZoPc',
        'Thala for a reason!': 'https://www.youtube.com/embed/0yDOloeUtfM?autoplay=1&loop=1&playlist=0yDOloeUtfM',
        'You are not Thala!': 'https://www.youtube.com/embed/ag-DHH4SM5U?autoplay=1&loop=1&playlist=ag-DHH4SM5U',
        'Please enter a value.': 'https://www.youtube.com/embed/ppsdEng74BM?autoplay=1&loop=1&playlist=ppsdEng74BM'
    };

    const videoPlayer = document.getElementById('videoPlayer');
    const resultMessage = document.querySelector('.result-message');
    const resultSection = document.querySelector('.result-section');

    function handleCheck() {
        const inputValue = document.getElementById('inputField').value.trim();
        let result = '';

        if (inputValue === '') {
            result = 'Please enter a value.';
        } else if (inputValue === '7') {
            result = 'Naughty ho raha ke!';
        } else if (!isNaN(inputValue)) {
            const singleDigit = inputValue.split('').reduce((acc, curr) => acc + parseInt(curr), 0);
            if (singleDigit === 7) {
                result = 'Thala for a reason!';
            } else {
                const alphaCount = inputValue.replace(/[^a-zA-Z]/g, '').length;
                if (alphaCount === 7) {
                    result = 'Thala for a reason!';
                } else {
                    result = 'You are not Thala!';
                }
            }
        } else {
            const alphaCount = inputValue.replace(/[^a-zA-Z]/g, '').length;
            if (alphaCount === 7) {
                result = 'Thala for a reason!';
            } else {
                result = 'You are not Thala!';
            }
        }

        resultMessage.textContent = result;

        if (videos[result]) {
            videoPlayer.src = videos[result];
            videoPlayer.style.display = 'block';
        } else {
            videoPlayer.src = '';
            videoPlayer.style.display = 'none';
        }

        resultSection.style.display = 'block';
    }

    document.getElementById('checkButton').addEventListener('click', handleCheck);
};
