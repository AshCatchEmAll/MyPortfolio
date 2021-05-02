package controllers

import (
	"log"
	"net/http"
	"server/database"

	"github.com/gorilla/mux"
)

// Get the template
func DownloadImage(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	fileName, err := database.ReadFile(params["username"])
	if err != nil {
        log.Fatal(err)
    }
	// Serving the file to frontend by filepath
    http.ServeFile(w, r, fileName)
}