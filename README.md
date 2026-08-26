echo "# woori-wonit-2026" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/YeonjiKim0316/woori-wonit-2026.git
git push -u origin main

git config --global user.email "kimyeonji3@gmail.com"
git config --global user.name "YeonjiKim0316"

########### 새로 내용을 변경했을 때
git add README.md
git commit -m "first commit"
git push -u origin main