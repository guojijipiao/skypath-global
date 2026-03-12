Get-ChildItem 'C:\Users' -Directory -Force -ErrorAction SilentlyContinue |
    ForEach-Object {
        try {
            $s = (Get-ChildItem $_.FullName -Recurse -Force -ErrorAction SilentlyContinue |
                  Measure-Object -Property Length -Sum -ErrorAction SilentlyContinue).Sum
            if ($s) {
                [PSCustomObject]@{
                    Folder = $_.FullName
                    SizeGB = [Math]::Round($s/1GB, 2)
                }
            }
        } catch {}
    } |
    Sort-Object SizeGB -Descending |
    Select-Object -First 10 |
    Format-Table -AutoSize
