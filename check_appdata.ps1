Get-ChildItem 'C:\Users\86130\AppData' -Directory -Force -ErrorAction SilentlyContinue |
    ForEach-Object {
        try {
            $s = (Get-ChildItem $_.FullName -Recurse -Force -ErrorAction SilentlyContinue |
                  Measure-Object -Property Length -Sum -ErrorAction SilentlyContinue).Sum
            if ($s) {
                [PSCustomObject]@{
                    Folder = $_.Name
                    SizeGB = [Math]::Round($s/1GB, 2)
                    Path = $_.FullName
                }
            }
        } catch {}
    } |
    Sort-Object SizeGB -Descending |
    Select-Object -First 15 |
    Format-Table -AutoSize
