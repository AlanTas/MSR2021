const Markdown = (props) => {
  const markdown = `
  This is rendered as a '<p>' element

  So is this one!

  Me too!
  `;

  useEffect(() => {
    // Get all of the <p> elements
    const pElements = document.getElementsByTagName("p");

    // Create a button
    const button = document.createElement("button");
    button.id = "btn-1";
    button.innerHTML = "I'm a button!";

    const refChild = pElements[1];
    // Insert the button before the next sibling of the second <p> tag
    refChild && refChild.parentNode.insertBefore(button, refChild.nextSibling);
  }, []);

  return <ReactMarkdown children={markdown} />;
};
