package passportsso

import (
	"embed"

	"github.com/bitwormhole/passport-sso/gen/gen4main"
	"github.com/starter-go/application"
	"github.com/starter-go/libgin/modules/libgin"
	"github.com/starter-go/libgorm/modules/libgorm"
	"github.com/starter-go/security-gin-gorm/modules/securitygingorm"
	"github.com/starter-go/starter"
)

const (
	theModuleName     = "github.com/bitwormhole/passport-sso"
	theModuleVersion  = "v0.0.0"
	theModuleRevision = 0
	theModuleResPath  = "src/main/resources"
)

//go:embed "src/main/resources"
var theModuleResFS embed.FS

func Module() application.Module {
	mb := &application.ModuleBuilder{}
	mb.Name(theModuleName)
	mb.Version(theModuleVersion)
	mb.Revision(theModuleRevision)
	mb.EmbedResources(theModuleResFS, theModuleResPath)
	mb.Components(gen4main.ExportComForPassportCloudMain)

	mb.Depend(starter.Module())
	mb.Depend(libgin.Module())
	mb.Depend(libgorm.Module())
	mb.Depend(securitygingorm.Module())

	return mb.Create()
}
