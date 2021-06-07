import os

for subdir, dirs, files in os.walk('.\profiles'):
    for file in files:
        #print os.path.join(subdir, file)
        filepath = subdir + os.sep + file

        # if filepath.endswith(".asm"):
        #     print (filepath)
        # print(filepath)
        print(os.path.splitext(file)[0])