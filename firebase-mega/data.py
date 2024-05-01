import sys
import datetime
import gspread

sheet = open("sheet", "r")
get_sheet = sheet.read()
gc = gspread.service_account(filename='credentials.json')
sh = gc.open_by_key(get_sheet)
worksheet = sh.sheet1
txt = open("days.txt", "r")
temp = txt.read() 
days = int(temp)

currtime = datetime.datetime.now()
kales = int(sys.argv[1])
metries = int(sys.argv[2])
kakes = int(sys.argv[3])
epistrofes = int(sys.argv[10])
epistrofes_oxi = int(sys.argv[11])
sxolia = int(sys.argv[12])
sxolia_oxi = int(sys.argv[13])

f=open("output.txt", "a")
print(type(kales), type(metries), type(kakes), type(epistrofes), type(sxolia))
print("Kales:", kales, "Metries:", metries, "Kakes:", kakes, "Epistrofh-Sto-Katashma:", epistrofes, "Sxolia:", sxolia, currtime)
print("Kales:", kales, "Metries:", metries, "Kakes:", kakes, "Epistrofh-Sto-Katashma:", epistrofes, "Sxolia:", sxolia, currtime, file=f)

worksheet.update_cell(days,2, kales)
worksheet.update_cell(days,3, metries)
worksheet.update_cell(days,4, kakes)
worksheet.update_cell(days,7, epistrofes)
worksheet.update_cell(days,8,epistrofes_oxi)
worksheet.update_cell(days,12, sxolia_oxi)
days=days+1
print(days)
txt = open("days.txt", "w")
txt.write(str(days))
txt.close()

sys.stdout.flush()