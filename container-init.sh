#!/bin/sh
if [ ! -e '/check' ]; then
    touch /check
    create-react-app react-app
    echo "セットアップ"
else
    echo "セットアップ済"
    cd react-app && npm start
fi
