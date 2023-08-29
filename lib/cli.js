const Circle = require('./circle')
const Square = require('./square')
const Triangle = require('./triangle')

class CLI {
  constructor() {
    this.answers = [];
  }
  run() {
    return inquirer
      .prompt([
        {
          type: "input",
          name: "logoText",
          message: "Enter 3 characters for your logo",
        },
        {
          type: "input",
          name: "textColor",
          message: "Enter a color or its hex value for the text.",
        },
        {
          type: "list",
          name: "textSize",
          message: "Enter a shape for your logo",
          choices: ["Small", "Medium", "Large"],
        },
        {
          type: "list",
          name: "logoShape",
          message: "Enter a shape for your logo",
          choices: ["Circle", "Triangle", "Square"],
        },
        {type: "input",
        name: "shapeColor",
        message: "Enter a color or its hex value for the shape.",
      },
      ])
      .then(answers ) => {
        const shapeContent = generateShape(answers);
        return writeToFile('logo.svg', shapeContent);


      })

      .catch((err) => {
        console.log(err);
        console.log("Oops. Check the cosole error - Something went wrong.");
    });

  //     .then(({ name }) => {
  //       this.title = `${name}'s Tasks`;
  //       return this.addTask();
  //     })
  //     .then(() => {
  //       // sort by priority so that priority tasks come before non-priority tasks
  //       this.tasks.sort((a, b) =>
  //         a.priority === b.priority ? 0 : a.priority && !b.priority ? -1 : 1
  //       );
  //       return writeFile(
  //         join(__dirname, '..', 'output', 'tasks.html'),
  //         createDocument(this.title, this.tasks)
  //       );
  //     })
  //     .then(() => console.log('Created tasks.html'))
  //     .catch((err) => {
  //       console.log(err);
  //       console.log('Oops. Something went wrong.');
  //     });
  // }

//   addTask() {
//     return inquirer
//       .prompt([
//         {
//           type: 'input',
//           name: 'text',
//           message: 'Enter task',
//         },
//         {
//           type: 'confirm',
//           name: 'priority',
//           message: 'Is this a priority task?',
//         },
//         {
//           type: 'confirm',
//           name: 'confirmAddTask',
//           message: 'Would you like to add another task?',
//         },
//       ])
//       .then(({ text, priority, confirmAddTask }) => {
//         this.tasks.push({ text, priority });
//         if (confirmAddTask) {
//           return this.addTask();
//         }
//       });
//   }
// }

module.exports = CLI;
