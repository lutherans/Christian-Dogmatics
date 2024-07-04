echo off
clear
echo INSTRUCTION OF HOW TO CREATE CHANGELOG
echo (1)
echo Start with creating a tag for an release:
echo - git tag v0.1.3
echo (2)
echo This tag only exist in the local environment.
echo Push this tag to the online repo with:
echo - git push origin --tags
echo (3)
echo Then you are ready to create the changelog:
echo - ./generate_changelog_local.sh
echo (4)
echo Then you are ready to open GIT DESKTOP and create the commit for 0.1.3,
echo and push this to the online environment.
echo ---
echo (5)
echo If you want step 1 to 3 to be run automatically then write:
echo - ./tags.bat
echo ---
echo END OF INSTRUCTION
echo on