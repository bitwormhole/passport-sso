package main

import (
	"os"

	passportsso "github.com/bitwormhole/passport-sso"
	"github.com/starter-go/starter"
)

func main() {
	i := starter.Init(os.Args)
	i.MainModule(passportsso.Module())
	i.WithPanic(true).Run()
}
