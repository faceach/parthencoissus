// UserA --> UserB
{ 
    from: "UserA",
    to: "UserB",
    type: "invite",
    content: {
        word: "favor",
        explanation: "someone love something crazy"
    }
}

{ 
    from: "UserA",
    to: "UserB",
    type: "rescue",
    content: {
        word: "favor",
        explanation: "someone love something crazy"
    }
}

// UserB --> UserA
{ 
    from: "UserB",
    to: "UserA",
    type: "success"
}

{ 
    from: "UserB",
    to: "UserA",
    type: "giveup"
}

{ 
    from: "UserB",
    to: "UserA",
    type: "exit"
}

{ 
    from: "UserB",
    to: "UserA",
    type: "fail",
    content: {
        word: "enjoy"
    }
}
