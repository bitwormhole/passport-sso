package entity

import "github.com/bitwormhole/passport-sso/app/data/dxo"

// Application 表示一个web应用
type Application struct {
	ID dxo.ApplicationID

	Base

	Domain  string
	Title   string
	Enabled bool
}
