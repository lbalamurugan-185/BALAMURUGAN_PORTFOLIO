import csv

with open(r"C:\Users\BALAMURUGAN L\OneDrive\ドキュメント\BALAMURUGAN_PORTFOLIO\3. PYTHON\Foundations\oops\data.csv","w",newline="") as file:
    # reader=csv.reader(file)
    # for row in file:
    #     print(row)
    # print(file)


    # reader=csv.DictReader(file)
    # for row in reader:
    #     print(row["dept"])
    #     print(row["name"])


    # writer=csv.writer(file)
    # writer.writerow(["logi","hindi"])

    # reader=csv.DictWriter(file)
    # for row in writer:
    #     print(row["dept"])
    #     print(row["name"]) wrong

    # header_row=["name","dept"]
    # writer=csv.DictWriter(file,fieldnames=header_row)
    # writer.writeheader()
    # writer.writerow({"name"="selvam","dept"="tamil"})