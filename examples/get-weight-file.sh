#!/bin/bash

# use file

# create file
username='username'
apikey='apikey'
hatena-graph --username $username --apikey $apikey create-authfile

graphname='weight'
hatena-graph --username $username --apikey $apikey get-data $graphname

# delete file
hatena-graph delete-authfile

