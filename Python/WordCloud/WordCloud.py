import matplotlib.pyplot as plt
from wordcloud import WordCloud, STOPWORDS
import sys, os
os.chdir(sys.path[0])

# Read test
text = open('test.txt', mode='r', encoding='utf-8').read()
stopwords = STOPWORDS

wc = WordCloud(
    background_color='white',
    stopwords=stopwords,
    height=600,
    width=400
)

wc.generate(text)

#Store to file
wc.to_file('wordCloud.png')