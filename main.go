package main

import (
	"embed"
	"os"

	"github.com/bitwormhole/passport-cloud/gen/gen4main"
	"github.com/starter-go/application"
	"github.com/starter-go/libgin/modulegin"
	"github.com/starter-go/libgorm/modgorm"
	"github.com/starter-go/starter"
)

const (
	theModuleName     = "github.com/bitwormhole/passport-cloud"
	theModuleVersion  = "v0.0.0"
	theModuleRevision = 0
	theModuleResPath  = "src/main/resources"
)

//go:embed "src/main/resources"
var theModuleResFS embed.FS

func module() application.Module {
	mb := &application.ModuleBuilder{}
	mb.Name(theModuleName)
	mb.Version(theModuleVersion)
	mb.Revision(theModuleRevision)
	mb.EmbedResources(theModuleResFS, theModuleResPath)
	mb.Components(gen4main.ExportComForPassportCloudMain)

	mb.Depend(starter.Module())
	mb.Depend(modulegin.Module())
	mb.Depend(modgorm.Module())

	return mb.Create()
}

func main() {
	i := starter.Init(os.Args)
	i.MainModule(module())
	i.WithPanic(true).Run()
}
