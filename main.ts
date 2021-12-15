namespace SpriteKind {
    export const cursor = SpriteKind.create()
    export const button = SpriteKind.create()
}
// makes the player use a treat, wich makes it easier to catch, but more likely to run
function useTreat () {
    textSprite = textsprite.create("You used a treat", 1, 15)
    textSprite.setPosition(50, 100)
    aggravation += -1
    timer.after(2500, function () {
        textSprite.destroy()
        enemyTurn()
    })
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (functionA) {
        pointer.y += -17
        if (pointer.y < ball.y) {
            pointer.y += 68
        }
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (functionA) {
        functionA = 0
    }
    if (pointer.overlapsWith(ball)) {
        removeButton()
        useBall()
    } else if (pointer.overlapsWith(treat)) {
        removeButton()
        useTreat()
    } else if (pointer.overlapsWith(rock)) {
        removeButton()
        useRock()
    } else if (pointer.overlapsWith(run)) {
        removeButton()
        justRun()
    }
})
// throw a rock to deal damage, making it harder to catch, but less likely to run
function useRock () {
    textSprite = textsprite.create("You used a rock", 1, 15)
    textSprite.setPosition(50, 100)
    _throw = randint(0, 100)
    while (!(controller.A.isPressed())) {
        textSprite.destroy()
        if (_throw < 15) {
            timer.after(4500, function () {
                textSprite = textsprite.create("The Rock missed", 1, 15)
                textSprite.setPosition(50, 100)
            })
            while (!(controller.A.isPressed())) {
                textSprite.destroy()
                enemyTurn()
            }
        } else {
            aggravation += 1
            HP.value = HP.value - randint(10, 20)
            if (HP.value == 0) {
                textSprite = textsprite.create("The opposing [enter name here] fainted", 1, 15)
                textSprite.setPosition(50, 100)
                creature.vy += 100
                timer.after(100, function () {
                    creature.destroy()
                })
                while (!(controller.A.isPressed())) {
                    textSprite.destroy()
                    timer.after(2000, function () {
                        returnToMap()
                    })
                }
            } else {
                enemyTurn()
            }
        }
    }
}
function turnStart () {
    functionA = 1
    ball = sprites.create(img`
        66666666666666666666666666666666
        66666666666666666666666666666666
        66666666666666666666666666666666
        66666666666666666666666666666666
        66666666666666666666666666666666
        66666666666666666666666666666666
        66666666666666666666666666666666
        66666666666666666666666666666666
        66666666666666666666666666666666
        66666666666666666666666666666666
        66666666666666666666666666666666
        66666666666666666666666666666666
        66666666666666666666666666666666
        66666666666666666666666666666666
        66666666666666666666666666666666
        66666666666666666666666666666666
        `, SpriteKind.button)
    textBall = textsprite.create("Catch")
    ball.setPosition(132, 53)
    textBall.setPosition(132, 53)
    treat = sprites.create(img`
        77777777777777777777777777777777
        77777777777777777777777777777777
        77777777777777777777777777777777
        77777777777777777777777777777777
        77777777777777777777777777777777
        77777777777777777777777777777777
        77777777777777777777777777777777
        77777777777777777777777777777777
        77777777777777777777777777777777
        77777777777777777777777777777777
        77777777777777777777777777777777
        77777777777777777777777777777777
        77777777777777777777777777777777
        77777777777777777777777777777777
        77777777777777777777777777777777
        77777777777777777777777777777777
        `, SpriteKind.button)
    textTreat = textsprite.create("Treat")
    treat.setPosition(132, 70)
    textTreat.setPosition(132, 70)
    rock = sprites.create(img`
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        `, SpriteKind.button)
    textRock = textsprite.create("Rock")
    rock.setPosition(132, 87)
    textRock.setPosition(132, 87)
    run = sprites.create(img`
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        `, SpriteKind.button)
    textRun = textsprite.create("Run")
    run.setPosition(132, 104)
    textRun.setPosition(132, 104)
    pointer = sprites.create(img`
        55555555555555555555555555555555
        55............................55
        5.5..........................5.5
        5..............................5
        5..............................5
        5..............................5
        5..............................5
        5..............................5
        5..............................5
        5..............................5
        5..............................5
        5..............................5
        5..............................5
        5.5..........................5.5
        55............................55
        55555555555555555555555555555555
        `, SpriteKind.cursor)
    pointer.setPosition(132, 53)
}
// make it return to the map here
function justRun () {
    runChance = randint(0, 100)
    if (runChance < 5) {
        textSprite = textsprite.create("You couldn't get away", 1, 15)
        textSprite.setPosition(50, 100)
        while (!(controller.A.isPressed())) {
            textSprite.destroy()
            enemyTurn()
        }
    } else {
        textSprite = textsprite.create("You got away savely", 1, 15)
        textSprite.setPosition(50, 100)
        while (!(controller.A.isPressed())) {
            textSprite.destroy()
            returnToMap()
        }
    }
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (functionA) {
        pointer.y += 17
        if (pointer.y > run.y) {
            pointer.y += -68
        }
    }
})
// make the enemy make its move
function enemyTurn () {
    timer.after(2500, function () {
        enemyChoise = aggravation * 10 + randint(0, 100)
        if (enemyChoise < 95) {
            creature.vx += 100
            timer.after(100, function () {
                creature.destroy()
            })
            textSprite = textsprite.create("The opposing [enter name here] fled", 1, 15)
            textSprite.setPosition(50, 100)
            while (!(controller.A.isPressed())) {
                textSprite.destroy()
                returnToMap()
            }
        } else {
            textSprite = textsprite.create("The opposing [enter name here] is watching carefully", 1, 15)
            textSprite.setPosition(50, 100)
            while (!(controller.A.isPressed())) {
                textSprite.destroy()
                turnStart()
            }
        }
    })
}
function returnToMap () {
	
}
// makes the player throw the ball if selected
function useBall () {
    textSprite = textsprite.create("You used the Net Stone", 1, 15)
    textSprite.setPosition(50, 100)
    while (!(controller.A.isPressed())) {
        textSprite.destroy()
        catchRate = aggravation * 10 + (randint(0, 100) + HP.value)
        if (catchRate < 200) {
            timer.after(5000, function () {
                textSprite = textsprite.create("[enter name here] was caught", 1, 15)
                textSprite.setPosition(50, 100)
            })
            timer.after(10000, function () {
                textSprite.destroy()
            })
            timer.after(12500, function () {
                returnToMap()
            })
        } else {
            timer.after(randint(7500, 10000), function () {
                textSprite = textsprite.create("[enter name here] broke free", 1, 15)
                textSprite.setPosition(50, 100)
            })
            while (!(controller.A.isPressed())) {
                textSprite.destroy()
                enemyTurn()
            }
        }
    }
}
function removeButton () {
    pointer.destroy()
    ball.destroy()
    treat.destroy()
    rock.destroy()
    run.destroy()
    textBall.destroy()
    textTreat.destroy()
    textRock.destroy()
    textRun.destroy()
}
let catchRate = 0
let enemyChoise = 0
let runChance = 0
let textRun: TextSprite = null
let textRock: TextSprite = null
let textTreat: TextSprite = null
let textBall: TextSprite = null
let _throw = 0
let run: Sprite = null
let rock: Sprite = null
let treat: Sprite = null
let ball: Sprite = null
let pointer: Sprite = null
let functionA = 0
let HP: StatusBarSprite = null
let textSprite: TextSprite = null
let aggravation = 0
let creature: Sprite = null
let character = sprites.create(img`
    a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a 
    a a a a f a a a a a a f a a a a 
    a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a 
    a a a f a a a a a a a a a f a a 
    a a a a f f f f f f f f f a a a 
    a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a 
    `, SpriteKind.Player)
character.setPosition(25, 69)
creature = sprites.create(img`
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    `, SpriteKind.Enemy)
creature.setPosition(104, 35)
aggravation = 5
textSprite = textsprite.create("", 1, 15)
textSprite.setPosition(50, 100)
timer.after(2500, function () {
    textSprite.destroy()
    HP = statusbars.create(45, 4, StatusBarKind.EnemyHealth)
    HP.max = 143
    HP.value = 143
    HP.setPosition(125, 17)
    turnStart()
})
