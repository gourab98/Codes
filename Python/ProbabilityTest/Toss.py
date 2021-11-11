from random import randint

Total_Toss = 1000000
total_num = 30
total_count = 30
count = 0
head = 0
tail = 0
draw = 0

Head_Tail_Box = []
#
# for x in range(Total_Toss):
#     Head_Tail_Box.append(randint(0, 1))
#
# print("No. of Toss: "+str(Total_Toss))
# print("No. of Heads: "+str(Head_Tail_Box.count(1)))
# print("No. of Tails: "+str(Head_Tail_Box.count(0)))

for g in range(total_count):
    count = 0
    for p in range(total_num):
        for x in range(Total_Toss):
            Head_Tail_Box.append(randint(0, 1))
        print(str(g+1)+"th loop is in :" + str(p+1))
        print("Head--->" + str(count))
        # print("No. of Heads: " + str(Head_Tail_Box.count(1)))
        # print("No. of Tails: " + str(Head_Tail_Box.count(0)))
        if (Head_Tail_Box.count(1) > Head_Tail_Box.count(0)):
            count = count + 1
        Head_Tail_Box.clear()
    print("The total Head in one loop-->" + str(count))
    print("The loop count--------: " + str(g+1))
    if(count>(total_num/2)):
     head= head +1
    elif(count<(total_num/2)):
        tail = tail +1
    else:
        draw = draw +1

    print('Head: '+str(head) + ' Tail: '+str(tail) + ' draw: ' +str(draw))
