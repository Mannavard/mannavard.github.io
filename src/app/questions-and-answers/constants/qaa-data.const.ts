export const QAA_DATA = [
  {
    id: 's1',
    items: [
      {
        id: 'q1',
        label: '1. What is Angular? Why was it introduced?',
        value: 'Angular was introduced to create Single Page applications. This framework brings structure and consistency to web applications and provides excellent scalability and maintainability. \n' +
          '\n' +
          'Angular is an open-source, JavaScript framework wholly written in TypeScript. It uses HTML\'s syntax to express your application\'s components clearly. ',
      }, {
        id: 'q2',
        label: '2. What is TypeScript?',
        value: 'TypeScript is a superset of JavaScript that offers excellent consistency. It is highly recommended, as it provides some syntactic sugar and makes the code base more comfortable to understand and maintain. Ultimately, TypeScript code compiles down to JavaScript that can run efficiently in any environment. '
      }, {
        id: 'q3',
        label: '3. What are Single Page Applications (SPA)?',
        value: 'Single-page applications are web applications that load once with new features just being mere additions to the user interface. It does not load new HTML pages to display the new page\'s content, instead generated dynamically. This is made possible through JavaScript\'s ability to manipulate the DOM elements on the existing page itself. A SPA approach is faster, thus providing a seamless user experience. '
      }, {
        id: 'q4',
        label: '4. What are decorators in Angular? ',
        value: 'Decorators are a design pattern or functions that define how Angular features work. They are used to make prior modifications to a class, service, or filter. Angular supports four types of decorators, they are:\n' +
          '\n' +
          'Class Decorators\n' +
          'Property Decorators\n' +
          'Method Decorators\n' +
          'Parameter Decorators'
      }, {
        id: 'q5',
        label: '5. What are Directives in Angular?',
        value: `<p>Directives are <b>classes that add additional behavior to elements in your Angular applications</b>. They execute whenever the Angular compiler finds them in the DOM. Angular supports three types of directives:</p>
          <ul>
            <li>Component Directives - <code>@Component</code></li>
            <li>Structural Directives - <code>*ngIf, *ngFor, *ngSwitch</code></li>
            <li>Attribute Directives - <code>[NgStyle], [NgClass]</code></li>
          </ul>
        `,
      }, {
        id: 'q6',
        label: '6. What is an AOT compilation? What are its advantages?',
        value: `
          The Ahead-of-time (AOT) compiler converts the Angular HTML and TypeScript code into JavaScript code during the build phase, i.e., before the browser downloads and runs the code. <br><br>
          Some of its advantages are as follows:
            <ul>
              <li>Faster rendering</li>
              <li>Fewer asynchronous requests</li>
              <li>Smaller Angular framework download size</li>
              <li>Quick detection of template errors</li>
              <li>Better security</li>
            </ul>`
      }, {
        id: 'q7',
        label: '7. What are Components in Angular?',
        value: 'Components are the basic building blocks of the user interface in an Angular application. Every component is associated with a template and is a subset of directives. An Angular application typically consists of a root component, which is the AppComponent, that then branches out into other components creating a hierarchy.'
      }, {
        id: 'q8',
        label: '8. What are Pipes in Angular?',
        value: 'Pipes are simple functions designed to accept an input value, process, and return as an output, a transformed value in a more technical understanding. Angular supports several built-in pipes. However, you can also create custom pipes that cater to your needs. \n' +
          '\n' +
          'Some key features include: \n' +
          '\n' +
          'Pipes are defined using the pipe “|” symbol. \n' +
          'Pipes can be chained with other pipes.\n' +
          'Pipes can be provided with arguments by using the colon (:) sign.'
      }, {
        id: 'q9',
        label: '9. What is an ngModule?',
        value: 'NgModules are containers that reserve a block of code to an application domain or a workflow. @NgModule takes a metadata object that generally describes the way to compile the template of a component and to generate an injector at runtime. In addition, it identifies the module\'s components, directives, and pipes, making some of them public, through the export property so that external components can use them.'
      }, {
        id: 'q10',
        label: '10. What is view encapsulation in Angular?',
        value: 'View encapsulation defines whether the template and styles defined within the component can affect the whole application or vice versa. Angular provides three encapsulation strategies:\n' +
          '\n' +
          'Emulated - styles from the main HTML propagate to the component.\n' +
          'Native - styles from the main HTML do not propagate to the component. \n' +
          'None - styles from the component propagate back to the main HTML and therefore are visible to all components on the page.'
      }, {
        id: 'q11',
        label: '11. What do you understand by scope in Angular?',
        value: 'The scope in Angular binds the HTML, i.e., the view, and the JavaScript, i.e., the controller. It as expected is an object with the available methods and properties. The scope is available for both the view and the controller. When you make a controller in Angular, you pass the $scope object as an argument. '
      }, {
        id: 'q12',
        label: '12. Explain the lifecycle hooks in Angular',
        value: 'In Angular, every component has a lifecycle. Angular creates and renders these components and also destroys them before removing them from the DOM. This is achieved with the help of lifecycle hooks. Here\'s the list of them - \n' +
          '\n' +
          'ngOnChanges() - Responds when Angular sets/resets data-bound input properties.\n' +
          'ngOnInit() - Initialize the directive/component after Angular first displays the data-bound properties and sets the directive/component\'s input properties/\n' +
          'ngDoCheck() - Detect and act upon changes that Angular can\'t or won\'t detect on its own.\n' +
          'ngAfterContentInit() - Responds after Angular projects external content into the component\'s view.\n' +
          'ngAfterContentChecked() - Respond after Angular checks the content projected into the component.\n' +
          'ngAfterViewInit() - Respond after Angular initializes the component\'s views and child views.\n' +
          'ngAfterViewChecked() - Respond after Angular checks the component\'s views and child views.\n' +
          'ngOnDestroy - Cleanup just before Angular destroys the directive/component.'
      }, {
        id: 'q13',
        label: '13. What is String Interpolation in Angular?',
        value: 'String Interpolation is a one-way data-binding technique that outputs the data from TypeScript code to HTML view. It is denoted using double curly braces. This template expression helps display the data from the component to the view. {{ data }}'
      }, {
        id: 'q14',
        label: '14. What is the difference between AOT and JIT? ',
        value: 'Ahead of Time (AOT) compilation converts your code during the build time before the browser downloads and runs that code. This ensures faster rendering to the browser. To specify AOT compilation, include the --aot option with the ng build or ng serve command. \n' +
          '\n' +
          'The Just-in-Time (JIT) compilation process is a way of compiling computer code to machine code during execution or run time. It is also known as dynamic compilation. JIT compilation is the default when you run the ng build or ng serve CLI commands.'
      },
    ]
  }
]
