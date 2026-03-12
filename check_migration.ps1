$userProfile = $env:USERPROFILE
$targetBase = "D:\PersonalFiles"

Write-Host "=== Source (C:) ===" -ForegroundColor Cyan
Write-Host "Downloads: " -NoNewline
if (Test-Path "$userProfile\Downloads") {
    $size = (Get-ChildItem "$userProfile\Downloads" -Recurse -Force -ErrorAction SilentlyContinue | Measure-Object -Property Length -Sum -ErrorAction SilentlyContinue).Sum / 1GB
    Write-Host "$(if($size){[math]::Round($size,2)}else{0}) GB"
} else {
    Write-Host "(symbolic link)"
}

Write-Host "Desktop: " -NoNewline
if (Test-Path "$userProfile\Desktop") {
    $size = (Get-ChildItem "$userProfile\Desktop" -Recurse -Force -ErrorAction SilentlyContinue | Measure-Object -Property Length -Sum -ErrorAction SilentlyContinue).Sum / 1GB
    Write-Host "$(if($size){[math]::Round($size,2)}else{0}) GB"
} else {
    Write-Host "(symbolic link)"
}

Write-Host "`n=== Target (D:) ===" -ForegroundColor Cyan
Write-Host "Downloads: " -NoNewline
if (Test-Path "$targetBase\Downloads") {
    $size = (Get-ChildItem "$targetBase\Downloads" -Recurse -Force -ErrorAction SilentlyContinue | Measure-Object -Property Length -Sum -ErrorAction SilentlyContinue).Sum / 1GB
    Write-Host "$(if($size){[math]::Round($size,2)}else{0}) GB"
} else {
    Write-Host "(not found)"
}

Write-Host "Desktop: " -NoNewline
if (Test-Path "$targetBase\Desktop") {
    $size = (Get-ChildItem "$targetBase\Desktop" -Recurse -Force -ErrorAction SilentlyContinue | Measure-Object -Property Length -Sum -ErrorAction SilentlyContinue).Sum / 1GB
    Write-Host "$(if($size){[math]::Round($size,2)}else{0}) GB"
} else {
    Write-Host "(not found)"
}

Write-Host "Documents: " -NoNewline
if (Test-Path "$targetBase\Documents") {
    $size = (Get-ChildItem "$targetBase\Documents" -Recurse -Force -ErrorAction SilentlyContinue | Measure-Object -Property Length -Sum -ErrorAction SilentlyContinue).Sum / 1GB
    Write-Host "$(if($size){[math]::Round($size,2)}else{0}) GB"
} else {
    Write-Host "(not found)"
}

Write-Host "`n=== Disk Space ===" -ForegroundColor Green
Get-PSDrive C,D | ForEach-Object {
    $used = $_.Used / 1GB
    $free = $_.Free / 1GB
    Write-Host "$($_.Name): Used $([math]::Round($used, 1))GB, Free $([math]::Round($free, 1))GB"
}
