// Your code goes here
// When the DOM content has finished loading, execute the following code.
document.addEventListener('DOMContentLoaded', function() {
    // Find the <p> element and change its text content.
    document.querySelector('p').textContent = 'This is really cool!';
  });
  
  // The following code runs immediately after it is encountered.
  
  // Find the <p> element and check its initial text content.
  const initialText = document.querySelector('p').textContent;
  console.log('Initial text:', initialText);
  