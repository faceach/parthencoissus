// UserA --> UserB
{ 
    "from": "0001",
    "to": "0002",
    "type": "invite",
    "content": {
        "word": "favor",
        "explanation": "someone love something crazy"
    }
}

{ 
    "from": "0001",
    "to": "0002",
    "type": "rescue",
    "content": {
        "word": "favor",
        "explanation": "a feeling of favorable regard"
    }
}

// UserB --> UserA
{ 
    "from": "0002",
    "to": "0001",
    "type": "success"
}

{ 
    "from": "0002",
    "to": "0001",
    "type": "giveup"
}

{ 
    "from": "0002",
    "to": "0001",
    "type": "exit"
}

{ 
    "from": "0002",
    "to": "0001",
    "type": "fail",
    "content": {
        "word": "enjoy"
    }
}
