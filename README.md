 #SU.I.T.E

 #install cli
 npm install -g @angular/cli
 
 #install dependecies project
 npm install
  
 ## Development server
 Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. 
 
 ## SCAFFOLDING ..  g = generate
 ng g module newModule --routing      **to generate a module,
 cd newModule                         ***Non entrare nella dir altrimenti crea una sottodir
 ng g component newComponent          **to create a component as a child of the module.
 
 
 # Altri comandi
 Component	ng g component my-new-component
 Directive	ng g directive my-new-directive
 Pipe	    ng g pipe my-new-pipe
 Service	ng g service my-new-service
 Class	    ng g class my-new-class
 Guard	    ng g guard my-new-guard
 Interface	ng g interface my-new-interface
 Enum	    ng g enum my-new-enum
 Module	    ng g module my-module  
 
 
 #PIPES
 
 
 #TYPESCRIPT ESSENTIAL 
  #String
    var fullName: string = 'Nate Murray';
  #Number
    var age: number = 36;
  #Boolean
    var married: boolean = true;
  #Array
    var jobs: Array<string> = ['IBM', 'Microsoft', 'Google'];
    var jobs: string[] = ['Apple', 'Dell', 'HP'];
 
    var chickens: Array<number> = [1, 2, 3];
    var chickens: number[] = [4, 5, 6];
  #Enums
    enum Role {Employee, Manager, Admin};
    var role: Role = Role.Employee;
 
    enum Role {Employee = 3, Manager, Admin};
    var role: Role = Role.Employee;
 
    enum Role {Employee = 3, Manager = 5, Admin = 7};
    var role: Role = Role.Employee;
  
    enum Role {Employee, Manager, Admin};
  
   #Any any is the default type
    var something: any = 'as string';
    something = 1;
    something = [1, 2, 3];
  
   #Void
    function setName(name: string): void {
        this.fullName = name;
    }

 ## Build
 Run `ng build` to build the project. 
 The build artifacts will be stored in the `dist/` directory. 
 Use the `-prod` flag for a production build.
 
 #Mock Services 
 path testing-module -> importarlo e iniettarlo nel costruttore
 use -> this.checkList = this.checkListserviceMock.getAll();
 
 #CRUD
 ng g angular-crud:crud-module customer 
 
#FORCE UPDATE
ng update --all --force

#DEPLOY WAR FILE 
# DIST DIR
jar cvf suite.war .
#ATTENZIONE MODIFICARE 
## 1) index.html  <base href="./">  
## 2)HttpLoaderFactory del language-translation.module  riga 17/18 
#CANC DIST rm -rf /home/vdanael/Scrivania/SUITE_GIT/suite_mock/dist
