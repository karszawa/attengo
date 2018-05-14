package env

import (
	"sync"
	"github.com/kelseyhightower/envconfig"
)

type Specification struct {
	Port int `default:8080`
	Env Env
	DB DB
	Assets Assets
}

type Env struct {
	Env string `required:"true"`
}

func (self *Env) Development() bool {
	return self.Env == "development"
}

func (self *Env) Test() bool {
	return self.Env == "test"
}

func (self *Env) Production() bool {
	return self.Env == "production"
}

type DB struct {
	Host string
	Database string
	User string
	Port int
	Password string
}

type Assets struct {
	RootPath string `envconfig:"ROOT_PATH"`
}

var config Specification

var once = sync.Once{}

func GetSpecification() *Specification {
	once.Do(func() {
		if err := envconfig.Process("attengo", &config); err != nil {
			panic(err)
		}
	})

	return &config
}
