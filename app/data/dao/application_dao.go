package dao

import (
	"github.com/bitwormhole/passport-sso/app/data/dxo"
	"github.com/bitwormhole/passport-sso/app/data/entity"
	"gorm.io/gorm"
)

// ApplicationDAO 是 entity.Application 实体的访问对象
type ApplicationDAO interface {
	Find(db *gorm.DB, id dxo.ApplicationID) (*entity.Application, error)
	List(db *gorm.DB, q *dxo.ApplicationQuery) ([]*entity.Application, error)

	Insert(db *gorm.DB, o *entity.Application) (*entity.Application, error)
	Update(db *gorm.DB, id dxo.ApplicationID, o *entity.Application) (*entity.Application, error)
	Remove(db *gorm.DB, id dxo.ApplicationID) error
}
