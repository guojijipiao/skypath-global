# Check disk space
Get-PSDrive -PSProvider FileSystem | ForEach-Object {
    $usedGB = [math]::Round($_.Used/1GB, 2)
    $freeGB = [math]::Round($_.Free/1GB, 2)
    Write-Output "Drive $($_.Name): Used $usedGB GB, Free $freeGB GB"
}
