package gen4main
import (
    p622100d4e "github.com/bitwormhole/passport-cloud/app/web/controllers"
    pd1a916a20 "github.com/starter-go/libgin"
     "github.com/starter-go/application"
)

// type p622100d4e.ExampleController in package:github.com/bitwormhole/passport-cloud/app/web/controllers
//
// id:com-622100d4e8ce5e8b-controllers-ExampleController
// class:class-d1a916a203352fd5d33eabc36896b42e-Controller
// alias:
// scope:singleton
//
type p622100d4e8_controllers_ExampleController struct {
}

func (inst* p622100d4e8_controllers_ExampleController) register(cr application.ComponentRegistry) error {
	r := cr.NewRegistration()
	r.ID = "com-622100d4e8ce5e8b-controllers-ExampleController"
	r.Classes = "class-d1a916a203352fd5d33eabc36896b42e-Controller"
	r.Aliases = ""
	r.Scope = "singleton"
	r.NewFunc = inst.new
	r.InjectFunc = inst.inject
	return r.Commit()
}

func (inst* p622100d4e8_controllers_ExampleController) new() any {
    return &p622100d4e.ExampleController{}
}

func (inst* p622100d4e8_controllers_ExampleController) inject(injext application.InjectionExt, instance any) error {
	ie := injext
	com := instance.(*p622100d4e.ExampleController)
	nop(ie, com)

	
    com.Responder = inst.getResponder(ie)


    return nil
}


func (inst*p622100d4e8_controllers_ExampleController) getResponder(ie application.InjectionExt)pd1a916a20.Responder{
    return ie.GetComponent("#alias-d1a916a203352fd5d33eabc36896b42e-Responder").(pd1a916a20.Responder)
}


