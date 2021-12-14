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
        pointer.destroy()
        ball.destroy()
        treat.destroy()
        rock.destroy()
        run.destroy()
        useBall()
    } else if (pointer.overlapsWith(treat)) {
        pointer.destroy()
        ball.destroy()
        treat.destroy()
        rock.destroy()
        run.destroy()
        useTreat()
    } else if (pointer.overlapsWith(rock)) {
        pointer.destroy()
        ball.destroy()
        treat.destroy()
        rock.destroy()
        run.destroy()
        useRock()
    } else if (pointer.overlapsWith(run)) {
        pointer.destroy()
        ball.destroy()
        treat.destroy()
        rock.destroy()
        run.destroy()
        justRun()
    }
})
// throw a rock to deal damage, making it harder to catch, but less likely to run
function useRock () {
    textSprite = textsprite.create("You used a rock", 1, 15)
    textSprite.setPosition(50, 100)
    aggravation += 1
    timer.after(2500, function () {
        textSprite.destroy()
        HP.value = HP.value - randint(10, 20)
        if (HP.value == 0) {
            textSprite = textsprite.create("The opposing [enter name here] fainted", 1, 15)
            textSprite.setPosition(50, 100)
            timer.after(5000, function () {
                textSprite.destroy()
            })
        } else {
            enemyTurn()
        }
    })
}
function turnStart () {
    functionA = 1
    ball = sprites.create(img`
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        `, SpriteKind.button)
    rock = sprites.create(img`
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        `, SpriteKind.button)
    run = sprites.create(img`
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        `, SpriteKind.button)
    treat = sprites.create(img`
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        `, SpriteKind.button)
    pointer = sprites.create(img`
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        5 5 . . . . . . . . . . . . 5 5 
        5 . . . . . . . . . . . . . . 5 
        5 . . . . . . . . . . . . . . 5 
        5 . . . . . . . . . . . . . . 5 
        5 . . . . . . . . . . . . . . 5 
        5 . . . . . . . . . . . . . . 5 
        5 . . . . . . . . . . . . . . 5 
        5 . . . . . . . . . . . . . . 5 
        5 . . . . . . . . . . . . . . 5 
        5 . . . . . . . . . . . . . . 5 
        5 . . . . . . . . . . . . . . 5 
        5 . . . . . . . . . . . . . . 5 
        5 . . . . . . . . . . . . . . 5 
        5 5 . . . . . . . . . . . . 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        `, SpriteKind.cursor)
    pointer.setPosition(132, 53)
    ball.setPosition(132, 53)
    treat.setPosition(132, 70)
    rock.setPosition(132, 87)
    run.setPosition(132, 104)
}
// make it return to the map here
function justRun () {
    runChance = randint(0, 100)
    if (runChance < 5) {
        textSprite = textsprite.create("You couldn't get away", 1, 15)
        textSprite.setPosition(50, 100)
        timer.after(2500, function () {
            enemyTurn()
        })
    } else {
        textSprite = textsprite.create("You got away savely", 1, 15)
        textSprite.setPosition(50, 100)
        timer.after(2500, function () {
            textSprite.destroy()
        })
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
            textSprite = textsprite.create("The opposing [enter name here] fled", 1, 15)
            textSprite.setPosition(50, 100)
            timer.after(2500, function () {
                textSprite.destroy()
            })
        } else {
            textSprite = textsprite.create("The opposing [enter name here] is watching carefully", 1, 15)
            textSprite.setPosition(50, 100)
            timer.after(2500, function () {
                textSprite.destroy()
                turnStart()
            })
        }
    })
}
// makes the player throw the ball if selected
function useBall () {
    textSprite = textsprite.create("You used Ball", 1, 15)
    textSprite.setPosition(50, 100)
    timer.after(2500, function () {
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
            	
            })
        } else {
            timer.after(randint(7500, 10000), function () {
                textSprite = textsprite.create("[enter name here] broke free", 1, 15)
                textSprite.setPosition(50, 100)
            })
            timer.after(15000, function () {
                textSprite.destroy()
                enemyTurn()
            })
        }
    })
}
let catchRate = 0
let enemyChoise = 0
let runChance = 0
let run: Sprite = null
let rock: Sprite = null
let treat: Sprite = null
let ball: Sprite = null
let pointer: Sprite = null
let functionA = 0
let HP: StatusBarSprite = null
let textSprite: TextSprite = null
let aggravation = 0
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
