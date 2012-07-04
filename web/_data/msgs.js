// UserA --> UserB
{ 
	"from": {
		"username": "UserA",
		"userid": "0001"
	},
	"to": {
		"username": "UserB",
		"userid": "0002"
	},
	"type": "invite",
	"content": {
		"word": "favor",
		"explanation": "someone love something crazy"
	}
}

{ 
	"from": {
		"username": "UserA",
		"userid": "0001"
	},
	"to": {
		"username": "UserB",
		"userid": "0002"
	},
	"type": "rescue",
	"content": {
		"word": "favor",
		"explanation": "a feeling of favorable regard"
	}
}

// UserB --> UserA
{ 
	"from": {
		"username": "UserB",
		"userid": "0002"
	},
	"to": {
		"username": "UserA",
		"userid": "0001"
	},
	"type": "success"
}

{ 
	"from": {
		"username": "UserB",
		"userid": "0002"
	},
	"to": {
		"username": "UserA",
		"userid": "0001"
	},
	"type": "giveup"
}

{ 
	"from": {
		"username": "UserB",
		"userid": "0002"
	},
	"to": {
		"username": "UserA",
		"userid": "0001"
	},
	"type": "exit"
}

{ 
	"from": {
		"username": "UserB",
		"userid": "0002"
	},
	"to": {
		"username": "UserA",
		"userid": "0001"
	},
	"type": "fail",
	"content": {
		"word": "enjoy"
	}
}

{ 
	"from": {
		"username": "UserB",
		"userid": "0002"
	},
	"to": {
		"username": "UserA",
		"userid": "0001"
	},
	"type": "help"
}
