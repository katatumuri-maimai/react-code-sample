#!/bin/sh
if [ ! -e '/check' ]; then
    touch /check
    create-react-app my-react-app
    echo "セットアップ"
else
    echo "セットアップ済"
    cd my-react-app && npm start
fi
