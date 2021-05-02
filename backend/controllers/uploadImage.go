package controllers

import (
	"encoding/json"
	"io/ioutil"
	"log"
	"net/http"
	"server/database"
)

// Save template
func UploadImage(w http.ResponseWriter, r *http.Request) {
    // Saving File
	r.ParseMultipartForm(32 << 20) // limit your max input length!
    // Reads the file from the request
    file, header, err := r.FormFile("file")
    if err != nil {
        panic(err)
    }
    defer file.Close()

    // Reads the file and returns byte slice
    data, err := ioutil.ReadAll(file)
    if err != nil {
        log.Fatal(err)
    }
	// Inserts file to database
	database.InsertFile(data, header.Filename, Username)
    json.NewEncoder(w).Encode(Username)
}