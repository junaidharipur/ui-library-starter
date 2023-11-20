# ./scripts/post-build.sh

#!/bin/bash

sed -i '1,1s/^/"use client"; /' ./lib/cjs/index.js
sed -i '1,1s/^/"use client"; /' ./lib/esm/index.js