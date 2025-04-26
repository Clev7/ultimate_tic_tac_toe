### Making the Chess Clock

Using setInterval is kind of the knee jerk reaction I have for implementing this.
The only issue, I have with this is if you have a situation where a player has 1
second left and every time he uses it, the clock goes back to 1 second. That kind of
ruins the point of using a timer in some of the faster games, so I probably want to use
something like Date.now()

The main problem here is pausing the game fucks up the elapsed time because you can't count
if that happens.

Do we need to implement pausing though? I mean, pausing happens in chess because people
cheat. Maybe bathroom breaks can be a thing, but like idk. I can add it as a sort of challenge
just to reflect that chess clocks can do that. Maybe make it a thing where both players
need to vote to make it happen? possibly.

Let me think. Probably store a variable timeElapsed and then whenever a pause happens, record
the pause timestamp. after the unpause, do timeElapsed = Date.now() - startTime + (Date.now() - pauseTime)

1. startGame (start button is clicked)
2. store startTime
3. initialize pauseTime to null
4. pause button is clicked and the pauseTime is recorded using Date.now()
5. button is clicked again for unpausing

