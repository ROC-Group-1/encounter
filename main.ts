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
        berry = sprites.create(img`
            . . . . . . . . 
            . . . . . . . . 
            . . . . 7 . . . 
            . . . . 3 7 . . 
            . . . 3 3 3 7 . 
            . . 3 3 3 . . . 
            . . 3 3 . . . . 
            . . . . . . . . 
            `, SpriteKind.Projectile)
        berry.setPosition(25, 69)
        berry.setVelocity(200, -84)
        timer.after(300, function () {
            berry.destroy()
            enemyTurn()
        })
    })
}
function getCreature () {
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
        useBall()
        removeButton()
    } else if (pointer.overlapsWith(treat)) {
        useTreat()
        removeButton()
    } else if (pointer.overlapsWith(rock)) {
        useRock()
        removeButton()
    } else if (pointer.overlapsWith(run)) {
        justRun()
        removeButton()
    }
})
// throw a rock to deal damage, making it harder to catch, but less likely to run
function useRock () {
    timer.after(2500, function () {
        textSprite.destroy()
        if (_throw < 15) {
            throwableRock = sprites.create(img`
                . b b b b b . . 
                b b b b b b b . 
                b b b b b b b b 
                b b b b b b b b 
                b b b b b b b b 
                b b b b b b b b 
                . b b b b b b . 
                . . b b b b . . 
                `, SpriteKind.Projectile)
            throwableRock.setPosition(25, 69)
            throwableRock.setVelocity(200, -150)
            timer.after(300, function () {
                throwableRock.destroy()
                textSprite = textsprite.create("The Rock missed", 1, 15)
                textSprite.setPosition(50, 100)
                timer.after(2500, function () {
                    textSprite.destroy()
                    enemyTurn()
                })
            })
        } else {
            aggravation += 1
            throwableRock = sprites.create(img`
                . b b b b b . . 
                b b b b b b b . 
                b b b b b b b b 
                b b b b b b b b 
                b b b b b b b b 
                b b b b b b b b 
                . b b b b b b . 
                . . b b b b . . 
                `, SpriteKind.Projectile)
            throwableRock.setPosition(25, 69)
            throwableRock.setVelocity(200, -84)
            timer.after(300, function () {
                throwableRock.destroy()
                HP.value = HP.value - randint(10, 20)
                if (HP.value == 0) {
                    textSprite = textsprite.create("The opposing [enter name here] fainted", 1, 15)
                    textSprite.setPosition(50, 100)
                    creature.vy += 100
                    timer.after(100, function () {
                        creature.destroy()
                    })
                    timer.after(2000, function () {
                        textSprite.destroy()
                        timer.after(2000, function () {
                            returnToMap()
                        })
                    })
                } else {
                    enemyTurn()
                }
            })
        }
    })
    textSprite = textsprite.create("You used a rock", 1, 15)
    textSprite.setPosition(50, 100)
    _throw = randint(0, 100)
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
        timer.after(2500, function () {
            textSprite.destroy()
            enemyTurn()
        })
    } else {
        textSprite = textsprite.create("You got away savely", 1, 15)
        textSprite.setPosition(50, 100)
    }
    timer.after(2500, function () {
        textSprite.destroy()
        returnToMap()
    })
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
    timer.after(1000, function () {
        enemyChoise = aggravation * 10 + randint(0, 100)
        if (enemyChoise < 95) {
            creature.vx += 100
            timer.after(100, function () {
                creature.destroy()
            })
            textSprite = textsprite.create("The opposing [enter name here] fled", 1, 15)
            textSprite.setPosition(50, 100)
            timer.after(2500, function () {
                textSprite.destroy()
                returnToMap()
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
function returnToMap () {
	
}
// makes the player throw the ball if selected
function useBall () {
    textSprite = textsprite.create("You used the Net Stone", 1, 15)
    textSprite.setPosition(50, 100)
    timer.after(2500, function () {
        textSprite.destroy()
        thrownNetStone = sprites.create(img`
            . b b b b b . . 
            b b b b b b b . 
            b b b b b b b b 
            b b b b b b b b 
            b b b b b b b b 
            b b b b b b b b 
            . b b b b b b . 
            . . b b b b . . 
            `, SpriteKind.Projectile)
        thrownNetStone.setPosition(25, 69)
        thrownNetStone.setVelocity(200, -84)
        timer.after(300, function () {
            thrownNetStone.destroy()
            creature.destroy()
            netStone = sprites.create(img`
                . b b b b b . . 
                b b b b b b b . 
                b b b b b b b b 
                b b b b b b b b 
                b b b b b b b b 
                b b b b b b b b 
                . b b b b b b . 
                . . b b b b . . 
                `, SpriteKind.Projectile)
            netStone.setPosition(104, 35)
        })
        catchRate = aggravation * 10 + (randint(0, 100) + HP.value)
        if (catchRate < 200) {
            timer.after(5000, function () {
                thrownNetStone = sprites.create(img`
                    . d d d d d . . 
                    d d d d d d d . 
                    d d d d d d d d 
                    d d d d d d d d 
                    d d d d d d d d 
                    d d d d d d d d 
                    . d d d d d d . 
                    . . d d d d . . 
                    `, SpriteKind.Projectile)
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
                getCreature()
                netStone.destroy()
                textSprite = textsprite.create("[enter name here] broke free", 1, 15)
                textSprite.setPosition(50, 100)
                timer.after(2000, function () {
                    textSprite.destroy()
                    enemyTurn()
                })
            })
        }
    })
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
let netStone: Sprite = null
let thrownNetStone: Sprite = null
let enemyChoise = 0
let runChance = 0
let textRun: TextSprite = null
let textRock: TextSprite = null
let textTreat: TextSprite = null
let textBall: TextSprite = null
let throwableRock: Sprite = null
let _throw = 0
let run: Sprite = null
let rock: Sprite = null
let treat: Sprite = null
let ball: Sprite = null
let pointer: Sprite = null
let functionA = 0
let creature: Sprite = null
let berry: Sprite = null
let HP: StatusBarSprite = null
let textSprite: TextSprite = null
let aggravation = 0
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
getCreature()
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
