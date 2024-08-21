const htmlElements = [
    {
      id: 1,
      type: "div",
      child: [
        { id: 5, type: "h1" },
        { id: 6, type: "p" },
      ],
    },
    { id: 2, type: "div" },
    { id: 3, type: "div" },
    {
      id: 4,
      type: "div",
      child: [
        { id: 7, type: "h2" },
        { id: 8, type: "div", child: [{ id: 9, type: "span" }] },
      ],
    },
  ];
   
  /**
  *
  * @param {*} id
  * 2 - div
  * 7 - h2
  * 9 - span
  *
  * Question : Complete above scenarios in which getElementById(7), return h2
  * getElementById(9), return span
  */
  const getElementById = (id) => {
    const search = (elements) => {
      for (const element of elements) {
        if (element.id === id) {
          return element;
        }
        if (element.child) {
          const found = search(element.child);
          if (found) {
            return found;
          }
        }
      }
      return null; 
    };
  
    return search(htmlElements);
  };

  //Test result
  console.log(getElementById(2));


 