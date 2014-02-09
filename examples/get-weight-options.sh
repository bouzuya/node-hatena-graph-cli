#!/bin/bash

# use options
username='username'
apikey='apikey'
graphname='weight'
hatena-graph --username $username --apikey $apikey get-data $graphname

