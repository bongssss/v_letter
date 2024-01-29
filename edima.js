document.addEventListener('DOMContentLoaded', function() {
    // Function to display the love message
    function displayLoveMessage() {
        // Get the entered name
        const girlName = document.getElementById('girlName').value.trim();

        // Check if a name is entered
        if (girlName === "") {
            alert("Please enter your name.");
            return;
        }
        if (girlName.toLowerCase() !== 'edima samuel koffi') {
            alert("Sorry, incorrect Access keyphrase. Please enter the right Access keyphrase");
            return;
        }

        // Love message with innerHTML and line breaks
        const loveMessage = `Dear Princess ${girlName},<br><br>
        
        This webpage is a testament to the profound yearning I harbor to once again bask in your radiant presence.<br>
        Despite the brevity of our shared moments, you have etched an indelible impression upon the canvas of my soul.<br><br>
        I find myself often adrift in a sea of memories, each wave bringing with it echoes of our shared moments,<br>
        and the soothing warmth of our camaraderie.<br><br>
        I wish to convey to you a revelation most profound - <br>your dreams,
        those shimmering aspirations that dance in your eyes, have intertwined with my own.<br>
        They are no longer your solitary concern.<br>
        I stand committed, nay, devoted, to the monumental task of transforming these dreams into reality.<br>
        Your aspirations have become my quest, your hopes my guiding star.<br><br>
        With bated breath and a heart aflame with anticipation,<br>
        I yearn for the day when fate shall intertwine our paths once more.<br>
        Until that auspicious moment, know that every beat of my heart echoes with the silent longing -
         <br>'d’être réunie avec vous'.<br>
        Each word, each sentence in this letter, is a testament to the depth of my feelings for you, 
        a reflection of the profound impact you’ve had on me.<br>
        It is my hope that it resonates with you, as your presence does with me.` ;

        // Get the love message, paragraph, button, and input elements
        const loveMessageElement = document.getElementById('loveMessage');
        const loveParagraphElement = document.getElementById('loveParagraph');
        const buttonElement = document.querySelector('button');
        const inputElement = document.getElementById('girlName');
        const labelElement = document.getElementById('label');

        // Display the love message with line breaks
        loveMessageElement.innerHTML = loveMessage;

        // Hide the button and input
        labelElement.style.display ='none';
        buttonElement.style.display = 'none';
        inputElement.style.display = 'none';

        // Show the love paragraph
        loveParagraphElement.style.display = 'block';
    }

    // Attach the displayLoveMessage function to the button click event
    const button = document.querySelector('button');
    button.addEventListener('click', displayLoveMessage);
});
