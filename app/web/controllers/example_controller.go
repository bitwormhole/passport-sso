package controllers

import (
	"strconv"

	"github.com/bitwormhole/passport-cloud/app/web/vo"
	"github.com/gin-gonic/gin"
	"github.com/starter-go/libgin"
)

// ExampleController ...
type ExampleController struct {

	//starter:component
	_as func(libgin.Controller) //starter:as(".")

	Responder libgin.Responder //starter:inject("#")
}

func (inst *ExampleController) _impl() libgin.Controller {
	return inst
}

// Registration ...
func (inst *ExampleController) Registration() *libgin.ControllerRegistration {
	return &libgin.ControllerRegistration{Route: inst.route}
}

func (inst *ExampleController) route(g *gin.RouterGroup) error {

	g = g.Group("example")

	g.POST("", inst.handleInsert)
	g.DELETE(":id", inst.handleRemove)
	g.PUT(":id", inst.handleUpdate)
	g.GET(":id", inst.handleGetOne)
	g.GET("", inst.handleGetList)

	return nil
}

func (inst *ExampleController) handleGetOne(c *gin.Context) {
	req := &myExampleRequest{
		controller:      inst,
		context:         c,
		wantRequestID:   false,
		wantRequestBody: false,
	}
	req.execute(req.doGetOne)
}

func (inst *ExampleController) handleGetList(c *gin.Context) {
	req := &myExampleRequest{
		controller:      inst,
		context:         c,
		wantRequestID:   false,
		wantRequestBody: false,
	}
	req.execute(req.doGetList)
}

func (inst *ExampleController) handleRemove(c *gin.Context) {
	req := &myExampleRequest{
		controller:      inst,
		context:         c,
		wantRequestID:   false,
		wantRequestBody: false,
	}
	req.execute(req.doRemove)
}

func (inst *ExampleController) handleUpdate(c *gin.Context) {
	req := &myExampleRequest{
		controller:      inst,
		context:         c,
		wantRequestID:   false,
		wantRequestBody: false,
	}
	req.execute(req.doUpdate)
}

func (inst *ExampleController) handleInsert(c *gin.Context) {
	req := &myExampleRequest{
		controller:      inst,
		context:         c,
		wantRequestID:   false,
		wantRequestBody: false,
	}
	req.execute(req.doInsert)
}

////////////////////////////////////////////////////////////////////////////////

type myExampleRequest struct {
	context    *gin.Context
	controller *ExampleController

	wantRequestID   bool
	wantRequestBody bool
	wantRequestPage bool

	id    int64
	body1 vo.Example
	body2 vo.Example
}

func (inst *myExampleRequest) open() error {

	c := inst.context

	if inst.wantRequestID {
		str := c.Param("id")
		n, err := strconv.ParseInt(str, 10, 64)
		if err != nil {
			return err
		}
		inst.id = n
	}

	if inst.wantRequestBody {
		err := c.BindJSON(&inst.body1)
		if err != nil {
			return err
		}
	}

	if inst.wantRequestPage {
	}

	return nil
}

func (inst *myExampleRequest) send(err error) {
	resp := &libgin.Response{}
	resp.Context = inst.context
	resp.Data = &inst.body2
	resp.Error = err
	resp.Status = 0 // inst.body2
	inst.controller.Responder.Send(resp)
}

func (inst *myExampleRequest) execute(task func() error) {
	err := inst.open()
	if err == nil {
		err = task()
	}
	inst.send(err)
}

func (inst *myExampleRequest) doGetList() error {
	return nil
}

func (inst *myExampleRequest) doGetOne() error {
	return nil
}

func (inst *myExampleRequest) doInsert() error {
	return nil
}

func (inst *myExampleRequest) doUpdate() error {
	return nil
}

func (inst *myExampleRequest) doRemove() error {
	return nil
}
