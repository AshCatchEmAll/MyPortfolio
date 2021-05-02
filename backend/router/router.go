package router

import (
	"server/controllers"

	"github.com/gorilla/mux"
)

// Router is exported and used in main.go
func Router() *mux.Router {

	router := mux.NewRouter().StrictSlash(true)
	// Routes
	router.HandleFunc("/api/user/login", controllers.LoginHandler).Methods("POST", "OPTIONS")
	router.HandleFunc("/api/user/register", controllers.RegisterHandler).Methods("POST", "OPTIONS")
	router.HandleFunc("/api/getToken", controllers.GetToken).Methods("GET", "OPTIONS")
	router.HandleFunc("/api/image/upload", controllers.UploadImage).Methods("POST", "OPTIONS")
	router.HandleFunc("/api/image/{username}", controllers.DownloadImage).Methods("GET", "OPTIONS")
	return router
}