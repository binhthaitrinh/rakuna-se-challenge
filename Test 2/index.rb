# Fix a bug in someone else code 

# The bug was in the fact that the creator incorrectly state comdition for BLOCK the leader.
# The old code will always block when the leader goes to the right.
# However, this is not the desired behavior.
# We want to block the leader whenever it reaches start or end,
# or, when it goes the opposiite direction from the "goal" (elevator) of current floor

STDOUT.sync = true
_,w,_,e,o,_,_,n=gets.split.map(&:to_i)
l={}
n.times{f,x=gets.split.map(&:to_i);l[f]=x}
loop{f,c,d=gets.split;f,c=f.to_i,c.to_i;x= f==e ? o : l[f];puts (c<1 || c>=w-1) || ((d <=> "N") > 0 && c > x) || ((d <=> "N") < 0 && c < x) ? "BLOCK" : "WAIT"}