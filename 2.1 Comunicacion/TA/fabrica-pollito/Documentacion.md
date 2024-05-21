___Pollito Fabrica__
Documentacion

En primer lugar se crea un proyecto Angular con el comando ng new nombre el proyecto, luego instalar NgZorro ng add ng-zorro-antd
se procede a crear los componentes  
ng generate component padre
ng generate component hijo




ChildComponent y FatherComponent, que se comunican entre sí utilizando @Input y @Output en el caso del FatherComponent, y @ViewChild y @ContentChild para acceder a elementos hijos y elementos proyectados, respectivamente.


@Input() parentMessageInput: string: Propiedad de entrada para recibir mensajes del padre.
@Output() childMessageEventOutput: EventEmitter para enviar mensajes al padre.
parentMessageViewChild: string: Propiedad para mostrar mensajes del padre utilizando @ViewChild.
Método
sendMessage(): Método para emitir un mensaje al padre.
FatherComponent
Decorador @Component
selector: 'app-father'
standalone: true
imports: [CommonModule, FormsModule, NzButtonModule, NzCardModule, ChildComponent]

Propiedades
parentMessageInput: string: Mensaje inicial del padre.
childMessageEventOutput: string: Mensaje recibido del hijo.
Métodos
receiveMessage($event: string): Método para recibir mensajes del hijo.
ngAfterViewInit(): Método del ciclo de vida llamado después de que se haya inicializado la vista de los componentes.
ngAfterContentInit(): Método del ciclo de vida llamado después de que se haya inicializado el contenido de los componentes.
En el archivo HTML father.component.html, se muestra cómo se utilizan las propiedades y los eventos de los componentes FatherComponent y ChildComponent, así como cómo se proyecta contenido en el componente padre.

[Video](https://youtu.be/eSm2_aLSIGk)