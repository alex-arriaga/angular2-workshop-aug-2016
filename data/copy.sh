# Copy all json files to another folder
# find . -name "*.json" -print0 | rsync -av --files-from=- --from0 . ../all


# find . -type f -name '*.json' -exec mv -i {} ../all \;

# find . -name '*.json' -exec mv -t ../all +

# find . -name "*.json" -print0 | xargs -0 -I {} mv {} ../all


find /Users/alex/Sites/projects/pokemon-app/data/pokemon-details/ -name "*.json" -print0 | while IFS= read -r -d $'\0' file; do mv "$file" /Users/alex/Sites/projects/pokemon-app/data/temporary/; done
