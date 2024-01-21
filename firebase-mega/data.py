import sys
import datetime

currtime = datetime.datetime.now()
kales = int(sys.argv[1])
metries = int(sys.argv[2])
kakes = int(sys.argv[3])
epistrofes = int(sys.argv[10])
sxolia = int(sys.argv[12])

f=open("output.txt", "a")
print(type(kales), type(metries), type(kakes), type(epistrofes), type(sxolia))
print("Kales:", kales, "Metries:", metries, "Kakes:", kakes, "Epistrofh-Sto-Katashma:", epistrofes, "Sxolia:", sxolia, currtime)
print("Kales:", kales, "Metries:", metries, "Kakes:", kakes, "Epistrofh-Sto-Katashma:", epistrofes, "Sxolia:", sxolia, currtime, file=f)

sys.stdout.flush()