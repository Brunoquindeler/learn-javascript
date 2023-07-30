gitall:
	@echo Commit Message: "$(m)"
	@git add .
	@git commit -m "$(m)"
	@git push -u origin main