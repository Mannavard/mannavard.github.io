export const QAA_DATA = [
  {
    id: 's1',
    items: [
      {
        id: 'q1',
        label: '1. What is Angular?',
        value: `
         <p>Angular is a <b>TypeScript-based open-source web application framework</b>, developed and maintained by Google.</p>
         <p>Angular was introduced to create Single Page Applications (SPA).</p>
         <ul>
           <li>A <b>component-based</b> framework for building scalable web applications</li>
           <li>A collection of well-integrated libraries that cover a wide variety of features, including routing, forms management, client-server communication, and more</li>
           <li>A suite of developer tools to help you develop, build, test, and update your code</li>
         </ul>`,
      }, {
        id: 'q2',
        label: '2. What is TypeScript?',
        value: `<p>TypeScript is a programming language developed and maintained by Microsoft.</p>
                <p>It is <b>a strict syntactical superset of JavaScript</b> and adds optional static typing to the language.</p>`
      }, {
        id: 'q3',
        label: '3. What are Single Page Applications (SPA)?',
        value: `<p>A single-page application (SPA) is a web application or website that interacts with the user by dynamically rewriting the current web page with new data from the web server, instead of the default method of a web browser loading entire new pages. The goal is faster transitions that make the website feel more like a native app.</p>
                <p>In a SPA, a <b>page refresh never occurs</b>; instead, all necessary HTML, JavaScript, and CSS code is either retrieved by the browser with a <b>single page load</b>, or the appropriate resources are dynamically loaded and added to the page as necessary, usually in response to user actions.</p>`
      }, {
        id: 'q5',
        label: '5. What are Angular fundamental concepts?',
        value: `<p>The basic building blocks of the Angular framework are <b>Angular components and services that are organized into NgModules</b>.</p>
                <p>NgModules collect related code into functional sets; an Angular application is defined by <b>a set of NgModules</b>.</p>
                <p>An application always has at least <b>a root module</b> that enables bootstrapping, and typically has many more <i>feature</i> modules.</p>
                <p>Angular was designed to be highly modular and object-oriented in approach from the get go.</p>
                <p><b>Components define views</b>, which are sets of screen elements that Angular can choose among and modify according to your program logic and data.</p>
                <p><b>Components use services</b>, which provide specific functionality <i><b>not directly related to views</b></i>. Service providers can be injected into components as dependencies, making your code modular, reusable, and efficient.</p>`
      }, {
        id: 'q6',
        label: '6. What are Modules in Angular?',
        value: `<p><b>Angular applications are modular</b> and Angular has its own modularity system called <b>NgModules</b>.
                <p>NgModules are containers for a cohesive block of code dedicated to an application domain, a workflow, or a closely related set of capabilities.</p>
                <p>They can contain <b>components, service providers, and other code files</b> whose scope is defined by the containing NgModule.</p>
                <p>They <b>can import functionality</b> that is exported from other NgModules, and <b>export selected functionality</b> for use by other NgModules.</p>

<pre>import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
  imports:      [ BrowserModule ],
  providers:    [ LoggerService ],
  declarations: [ AppComponent ],
  exports:      [],
  bootstrap:    [ AppComponent ]
})
export class AppModule {}</pre>`
      }, {
        id: 'q7',
        label: '7. What are Components in Angular?',
        value: `<p>Every Angular application <b>has at least one component</b> - the <b>root component</b> that connects a component hierarchy with the page document object model (DOM).</p>
                <p>Each component defines <b>a class that contains application data and logic</b>, and <b>is associated with an HTML template</b> that defines a view to be displayed.</p>
                <p>The <code>@Component()</code> decorator identifies the class immediately below it as a component, and provides the template and related component-specific metadata.</p>`
      }, {
        id: 'q8',
        label: '8. What are Services in Angular?',
        value: `<p>For data or logic that isn't associated with a specific view, and that you want to share across components, you create a <b>service</b> class.</p>
                <p>A service class definition is immediately preceded by the <code>@Injectable()</code> decorator. The decorator provides the metadata that allows other providers to be injected as dependencies into your class.</p>
                <p>Dependency injection (DI) lets you keep your component classes lean and efficient. They (components) don't fetch data from the server, validate user input, or log directly to the console; they <b>delegate such tasks to services</b>.</p>`
      }, {
        id: 'q9',
        label: '9. What are Decorators in Angular?',
        value: `<p>Decorators are a design pattern or functions that <b>define how Angular features work</b>. They are used to make prior modifications to a class, service, or filter. Angular supports four types of decorators, they are:</p>
          <ul>
            <li>Class Decorators: <ul><li><code>@NgModule</li></code><li><code>@Component</li></code><li><code>@Injectable</li></code><li><code>@Directive</li></code><li><code>@Pipe</li></code></ul></li>
            <li>Property Decorators: <ul><li><code>@Input</code></li><li><code>@Output</code></li><li><code>@ContentChild</code></li><li><code>@ContentChildren</code></li><li><code>@ViewChild</code></li><li><code>@ViewChildren</code></li><li><code>@HostBinding</code></li></ul></li>
            <li>Method Decorators: <code>@HostListener</code>
            <li>Parameter Decorators: <ul><li><code>@Inject</code></li><li><code>@Host</code></li><li><code>@Self</code></li><li><code>@SkipSelf</code></li><li><code>@Optional</code></li></ul></li>
          </ul>`
      }, {
        id: 'q10',
        label: '10. What are Directives in Angular?',
        value: `<p>Directives are <b>classes that add additional behavior to elements in your Angular applications</b>. They execute whenever the Angular compiler finds them in the DOM. Angular supports three types of directives:</p>
          <ul>
            <li>Component Directives - <code>@Component</code></li>
            <li>Structural Directives - <code>*ngIf</code>, <code>*ngFor</code>, <code>*ngSwitch</code></li>
            <li>Attribute Directives - <code>[NgStyle]</code>, <code>[NgClass]</code></li>
          </ul>
        `,
      }, {
        id: 'q11',
        label: '11. What is an AOT compilation? What are its advantages?',
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
        id: 'q12',
        label: '12. What are Components in Angular?',
        value: 'Components are the basic building blocks of the user interface in an Angular application. Every component is associated with a template and is a subset of directives. An Angular application typically consists of a root component, which is the AppComponent, that then branches out into other components creating a hierarchy.'
      }, {
        id: 'q13',
        label: '13. What are Pipes in Angular?',
        value: 'Pipes are simple functions designed to accept an input value, process, and return as an output, a transformed value in a more technical understanding. Angular supports several built-in pipes. However, you can also create custom pipes that cater to your needs. \n' +
          '\n' +
          'Some key features include: \n' +
          '\n' +
          'Pipes are defined using the pipe “|” symbol. \n' +
          'Pipes can be chained with other pipes.\n' +
          'Pipes can be provided with arguments by using the colon (:) sign.'
      }, {
        id: 'q14',
        label: '14. What is an ngModule?',
        value: 'NgModules are containers that reserve a block of code to an application domain or a workflow. @NgModule takes a metadata object that generally describes the way to compile the template of a component and to generate an injector at runtime. In addition, it identifies the module\'s components, directives, and pipes, making some of them public, through the export property so that external components can use them.'
      }, {
        id: 'q15',
        label: '15. What is view encapsulation in Angular?',
        value: 'View encapsulation defines whether the template and styles defined within the component can affect the whole application or vice versa. Angular provides three encapsulation strategies:\n' +
          '\n' +
          'Emulated - styles from the main HTML propagate to the component.\n' +
          'Native - styles from the main HTML do not propagate to the component. \n' +
          'None - styles from the component propagate back to the main HTML and therefore are visible to all components on the page.'
      }, {
        id: 'q16',
        label: '16. What do you understand by scope in Angular?',
        value: 'The scope in Angular binds the HTML, i.e., the view, and the JavaScript, i.e., the controller. It as expected is an object with the available methods and properties. The scope is available for both the view and the controller. When you make a controller in Angular, you pass the $scope object as an argument. '
      }, {
        id: 'q17',
        label: '17. Explain the lifecycle hooks in Angular',
        value: `<p>In Angular, every component has a lifecycle. Angular creates and renders these components and also destroys them before removing them from the DOM. This is achieved with the help of lifecycle hooks. Here\'s the list of them:</p>
                <ul>
                  <li><code>ngOnChanges()</code> - Responds when Angular sets/resets data-bound input properties.</li>
                  <li><code>ngOnInit()</code> - Initialize the directive/component after Angular first displays the data-bound properties and sets the directive/component\'s input properties/</li>
                  <li><code>ngDoCheck()</code> - Detect and act upon changes that Angular can\'t or won\'t detect on its own.</li>
                  <li><code>ngAfterContentInit()</code> - Responds after Angular projects external content into the component\'s view.</li>
                  <li><code>ngAfterContentChecked()</code> - Respond after Angular checks the content projected into the component.</li>
                  <li><code>ngAfterViewInit()</code> - Respond after Angular initializes the component\'s views and child views.</li>
                  <li><code>ngAfterViewChecked()</code> - Respond after Angular checks the component\'s views and child views.</li>
                  <li><code>ngOnDestroy()</code> - Cleanup just before Angular destroys the directive/component.</li>
                </ul>`
      }, {
        id: 'q18',
        label: '18. What is String Interpolation in Angular?',
        value: 'String Interpolation is a one-way data-binding technique that outputs the data from TypeScript code to HTML view. It is denoted using double curly braces. This template expression helps display the data from the component to the view. {{ data }}'
      }, {
        id: 'q19',
        label: '19. What is the difference between AOT and JIT? ',
        value: 'Ahead of Time (AOT) compilation converts your code during the build time before the browser downloads and runs that code. This ensures faster rendering to the browser. To specify AOT compilation, include the --aot option with the ng build or ng serve command. \n' +
          '\n' +
          'The Just-in-Time (JIT) compilation process is a way of compiling computer code to machine code during execution or run time. It is also known as dynamic compilation. JIT compilation is the default when you run the ng build or ng serve CLI commands.'
      },
    ]
  }
]
