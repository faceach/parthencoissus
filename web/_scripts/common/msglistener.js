if(window.addEventListener){
 window.addEventListener("storage",handle_storage,false);
}else if(window.attachEvent){
 window.attachEvent("onstorage",handle_storage);
}