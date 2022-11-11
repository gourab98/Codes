print("First Example:")
scores = [86, 76, 67, 98, 95]
print(scores)
print("The max: ",max(scores))
print("The min: ",min(scores))
print("The total: ",sum(scores))
print("The total length of the array",len(scores))
scores.sort()
print("After sorting the array",scores)
print("total = ", sum(scores))

print("Second Example:")
boys_and_girls_of_classes = [[10,23], [20,20], [15,12], [13,16]]
print(boys_and_girls_of_classes)
print(boys_and_girls_of_classes[2][1])
boys_and_girls_of_classes.sort()
print("Default sort(by 1st element): ",boys_and_girls_of_classes)
boys_and_girls_of_classes.sort(key=lambda x: x[1])
print("Sort by 2nd element: ",boys_and_girls_of_classes)
print("Total number of each class: ",list(map(lambda x: x[0]+x[1],boys_and_girls_of_classes)))

print("Third Example:")
basketball_matches = [[0, 76, 86, 100],
                       [56, 0, 87, 65],
                       [65, 34, 0, 86],
                       [72, 65, 78, 0]]
print(basketball_matches)
print("The max:", list(map(lambda x: x[0]+x[1]+x[2]+x[3],basketball_matches)))

for i in range(len(basketball_matches)):
    for j in range(len(basketball_matches[0])):
        print("Team " + i + " " + basketball_matches[i][j])
        print("Against")
        print("Team " + j + " " + basketball_matches[j][i])
